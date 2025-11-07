#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    int temp_14;
    uint temp_15;
    uint temp_16;
    int temp_17;
    precise float temp_18;
    int temp_19;
    uint temp_20;
    uint temp_21;
    int temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    int temp_38;
    uint temp_39;
    uint temp_40;
    int temp_41;
    precise float temp_42;
    int temp_43;
    uint temp_44;
    int temp_45;
    precise float temp_46;
    int temp_47;
    uint temp_48;
    uint temp_49;
    int temp_50;
    precise float temp_51;
    int temp_52;
    uint temp_53;
    int temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400A70019 Mov
    // 0x000010: 0xEFD87F800807FF17 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A1D F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079400B70001 Mov
    // 0x000030: 0xEFD87F801047FF08 Ald
    temp_3 = in_attr8.y;
    // 0x000038: 0x4C98079400270016 Mov
    // 0x000048: 0xEFD87F800847FF00 Ald
    temp_4 = in_attr0.y;
    // 0x000050: 0x4C98079400370002 Mov
    // 0x000058: 0xEFD87F800887FF05 Ald
    temp_5 = in_attr0.z;
    // 0x000068: 0x3848000000471D1D Shl
    temp_6 = temp_2 << 4;
    // 0x000070: 0xEFD87F800A07FF1C Ald
    temp_7 = in_attr2.x;
    // 0x000078: 0x4C6810100007170A Fmul
    temp_8 = temp_0 * vp_c4.data[0].x;
    // 0x000088: 0xEFD87F800A47FF12 Ald
    temp_9 = in_attr2.y;
    // 0x000090: 0x4C6810100047171A Fmul
    temp_10 = temp_0 * vp_c4.data[1].x;
    // 0x000098: 0xEFD87F800907FF1B Ald
    temp_11 = in_attr1.x;
    // 0x0000A8: 0x4C68101000871717 Fmul
    temp_12 = temp_0 * vp_c4.data[2].x;
    // 0x0000B0: 0xEFD87F800A87FF04 Ald
    temp_13 = in_attr2.z;
    // 0x0000B8: 0xEF94007068871D0B Ldc
    temp_14 = temp_6 + 0x688;
    temp_15 = uint(temp_14) >> 2;
    temp_16 = temp_15 >> 2;
    temp_17 = int(temp_15) & 3;
    temp_18 = vp_c7.data[int(temp_16)][temp_17];
    // 0x0000C8: 0xEF94007048871D0C Ldc
    temp_19 = temp_6 + 0x488;
    temp_20 = uint(temp_19) >> 2;
    temp_21 = temp_20 >> 2;
    temp_22 = int(temp_20) & 3;
    temp_23 = vp_c7.data[int(temp_21)][temp_22];
    // 0x0000D0: 0x51A00C9400C70819 Ffma
    temp_24 = fma(temp_3, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x0000D8: 0xEFD87F800947FF15 Ald
    temp_25 = in_attr1.y;
    // 0x0000E8: 0x51A0009400D70818 Ffma
    temp_26 = fma(temp_3, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x0000F0: 0xEFD87F801407FF09 Ald
    temp_27 = in_attr12.x;
    // 0x0000F8: 0x51A00B1400470816 Ffma
    temp_28 = fma(temp_3, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000108: 0xEFD87F800987FF06 Ald
    temp_29 = in_attr1.z;
    // 0x000110: 0x51A0011400570808 Ffma
    temp_30 = fma(temp_3, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000118: 0xEFD87F801007FF07 Ald
    temp_31 = in_attr8.x;
    // 0x000128: 0x49A005100017000A Ffma
    temp_32 = fma(temp_4, vp_c4.data[0].y, temp_8);
    // 0x000130: 0xEFD87F801447FF0D Ald
    temp_33 = in_attr12.y;
    // 0x000138: 0x49A00D100057001A Ffma
    temp_34 = fma(temp_4, vp_c4.data[1].y, temp_10);
    // 0x000148: 0xEFD87F801487FF0E Ald
    temp_35 = in_attr12.z;
    // 0x000150: 0x49A00B9000970017 Ffma
    temp_36 = fma(temp_4, vp_c4.data[2].y, temp_12);
    // 0x000158: 0xEFD87F8014C7FF10 Ald
    temp_37 = in_attr12.w;
    // 0x000168: 0xEF95007068071D00 Ldc
    temp_38 = temp_6 + 0x680;
    temp_39 = uint(temp_38) >> 2;
    temp_40 = temp_39 >> 2;
    temp_41 = int(temp_39) & 3;
    temp_42 = vp_c7.data[int(temp_40)][temp_41];
    temp_43 = int(temp_39) + 1;
    temp_44 = uint(temp_43) >> 2;
    temp_45 = temp_43 & 3;
    temp_46 = vp_c7.data[int(temp_44)][temp_45];
    // 0x000170: 0xEF95007048071D02 Ldc
    temp_47 = temp_6 + 0x480;
    temp_48 = uint(temp_47) >> 2;
    temp_49 = temp_48 >> 2;
    temp_50 = int(temp_48) & 3;
    temp_51 = vp_c7.data[int(temp_49)][temp_50];
    temp_52 = int(temp_48) + 1;
    temp_53 = uint(temp_52) >> 2;
    temp_54 = temp_52 & 3;
    temp_55 = vp_c7.data[int(temp_53)][temp_54];
    // 0x000178: 0x4C68101000071C0F Fmul
    temp_56 = temp_7 * vp_c4.data[0].x;
    // 0x000188: 0x4C68101000871C11 Fmul
    temp_57 = temp_7 * vp_c4.data[2].x;
    // 0x000190: 0x4C68101000471C1C Fmul
    temp_58 = temp_7 * vp_c4.data[1].x;
    // 0x000198: 0x49A00B9000A70517 Ffma
    temp_59 = fma(temp_5, vp_c4.data[2].z, temp_36);
    // 0x0001A8: 0x49A00D100067051A Ffma
    temp_60 = fma(temp_5, vp_c4.data[1].z, temp_34);
    // 0x0001B0: 0x4C68101000071B14 Fmul
    temp_61 = temp_11 * vp_c4.data[0].x;
    // 0x0001B8: 0x49A007900017120F Ffma
    temp_62 = fma(temp_9, vp_c4.data[0].y, temp_56);
    // 0x0001C8: 0x49A0089000971211 Ffma
    temp_63 = fma(temp_9, vp_c4.data[2].y, temp_57);
    // 0x0001D0: 0x49A00E1000571212 Ffma
    temp_64 = fma(temp_9, vp_c4.data[1].y, temp_58);
    // 0x0001D8: 0x4C58101000B7171D Fadd
    temp_65 = temp_59 + vp_c4.data[2].w;
    // 0x0001E8: 0xEFD87F800AC7FF17 Ald
    temp_66 = in_attr2.w;
    // 0x0001F0: 0x4C58101000771A1A Fadd
    temp_67 = temp_60 + vp_c4.data[1].w;
    // 0x0001F8: 0xEFF07F800B07FF09 Ast
    out_attr3.x = temp_27;
    // 0x000208: 0x49A005100027050A Ffma
    temp_68 = fma(temp_5, vp_c4.data[0].z, temp_32);
    // 0x000210: 0xEFF07F800B47FF0D Ast
    out_attr3.y = temp_33;
    // 0x000218: 0x59A0058000C71D0B Ffma
    temp_69 = fma(temp_65, temp_23, temp_18);
    // 0x000228: 0xEFF07F800B87FF0E Ast
    out_attr3.z = temp_35;
    // 0x000230: 0x4C68101000871B13 Fmul
    temp_70 = temp_11 * vp_c4.data[2].x;
    // 0x000238: 0xEFF07F800BC7FF10 Ast
    out_attr3.w = temp_37;
    // 0x000248: 0x4C68101000471B1B Fmul
    temp_71 = temp_11 * vp_c4.data[1].x;
    // 0x000250: 0x49A007900027040F Ffma
    temp_72 = fma(temp_13, vp_c4.data[0].z, temp_62);
    // 0x000258: 0x49A0089000A70411 Ffma
    temp_73 = fma(temp_13, vp_c4.data[2].z, temp_63);
    // 0x000268: 0x49A0091000670412 Ffma
    temp_74 = fma(temp_13, vp_c4.data[1].z, temp_64);
    // 0x000270: 0x49A00A1000171514 Ffma
    temp_75 = fma(temp_25, vp_c4.data[0].y, temp_61);
    // 0x000278: 0x59A0008000371A01 Ffma
    temp_76 = fma(temp_67, temp_55, temp_46);
    // 0x000288: 0x4C5810180BA70B04 Fadd
    temp_77 = temp_69 + vp_c6.data[46].z;
    // 0x000290: 0x4C58101000370A03 Fadd
    temp_78 = temp_68 + vp_c4.data[0].w;
    // 0x000298: 0x49A0099000971513 Ffma
    temp_79 = fma(temp_25, vp_c4.data[2].y, temp_70);
    // 0x0002A8: 0x49A00D9000571515 Ffma
    temp_80 = fma(temp_25, vp_c4.data[1].y, temp_71);
    // 0x0002B0: 0x49A00C9400870719 Ffma
    temp_81 = fma(temp_31, vp_c5.data[2].x, temp_24);
    // 0x0002B8: 0x49A00C1400970718 Ffma
    temp_82 = fma(temp_31, vp_c5.data[2].y, temp_26);
    // 0x0002C8: 0xEFF07F800E87FF19 Ast
    out_attr6.z = temp_81;
    // 0x0002D0: 0x49A00B1400070716 Ffma
    temp_83 = fma(temp_31, vp_c5.data[0].x, temp_28);
    // 0x0002D8: 0xEFF07F800EC7FF18 Ast
    out_attr6.w = temp_82;
    // 0x0002E8: 0x49A0041400170708 Ffma
    temp_84 = fma(temp_31, vp_c5.data[0].y, temp_30);
    // 0x0002F0: 0xEFF07F800E07FF16 Ast
    out_attr6.x = temp_83;
    // 0x0002F8: 0x49A00A1000270614 Ffma
    temp_85 = fma(temp_29, vp_c4.data[0].z, temp_75);
    // 0x000308: 0xEFF07F800E47FF08 Ast
    out_attr6.y = temp_84;
    // 0x000310: 0x4C5810180B970109 Fadd
    temp_86 = temp_76 + vp_c6.data[46].y;
    // 0x000318: 0x4C6810180C27040A Fmul
    temp_87 = temp_77 * vp_c6.data[48].z;
    // 0x000328: 0x5C68100000F70F07 Fmul
    temp_88 = temp_72 * temp_72;
    // 0x000330: 0x59A0000000270305 Ffma
    temp_89 = fma(temp_78, temp_51, temp_42);
    // 0x000338: 0x49A0099000A70613 Ffma
    temp_90 = fma(temp_29, vp_c4.data[2].z, temp_79);
    // 0x000348: 0x49A00A9000670615 Ffma
    temp_91 = fma(temp_29, vp_c4.data[1].z, temp_80);
    // 0x000350: 0x4C6810180C67040C Fmul
    temp_92 = temp_77 * vp_c6.data[49].z;
    // 0x000358: 0x5C68100001471406 Fmul
    temp_93 = temp_85 * temp_85;
    // 0x000368: 0x49A005180C170902 Ffma
    temp_94 = fma(temp_86, vp_c6.data[48].y, temp_87);
    // 0x000370: 0x59A003800127120A Ffma
    temp_95 = fma(temp_74, temp_74, temp_88);
    // 0x000378: 0x4C68100C00470507 Fmul
    temp_96 = temp_89 * vp_c3.data[1].x;
    // 0x000388: 0x4C6810180CA7041A Fmul
    temp_97 = temp_77 * vp_c6.data[50].z;
    // 0x000390: 0x4C5810180B870503 Fadd
    temp_98 = temp_89 + vp_c6.data[46].x;
    // 0x000398: 0x49A006180C570904 Ffma
    temp_99 = fma(temp_86, vp_c6.data[49].y, temp_92);
    // 0x0003A8: 0x59A003000157150D Ffma
    temp_100 = fma(temp_91, temp_91, temp_93);
    // 0x0003B0: 0x4C68100C0087050C Fmul
    temp_101 = temp_89 * vp_c3.data[2].x;
    // 0x0003B8: 0x4C68100C00070506 Fmul
    temp_102 = temp_89 * vp_c3.data[0].x;
    // 0x0003C8: 0x4C58300C02F70518 Fadd
    temp_103 = 0.0 - vp_c3.data[11].w;
    temp_104 = temp_89 + temp_103;
    // 0x0003D0: 0x4C5830180B07050E Fadd
    temp_105 = 0.0 - vp_c6.data[44].x;
    temp_106 = temp_89 + temp_105;
    // 0x0003D8: 0xEFF07F800C07FF18 Ast
    out_attr4.x = temp_104;
    // 0x0003E8: 0x49A0038C00570105 Ffma
    temp_107 = fma(temp_76, vp_c3.data[1].y, temp_96);
    // 0x0003F0: 0x49A00D180C970900 Ffma
    temp_108 = fma(temp_86, vp_c6.data[50].y, temp_97);
    // 0x0003F8: 0x49A001180C070307 Ffma
    temp_109 = fma(temp_98, vp_c6.data[48].x, temp_94);
    // 0x000408: 0x59A0050001171109 Ffma
    temp_110 = fma(temp_73, temp_73, temp_95);
    // 0x000410: 0x59A006800137130A Ffma
    temp_111 = fma(temp_90, temp_90, temp_100);
    // 0x000418: 0x49A002180C470310 Ffma
    temp_112 = fma(temp_98, vp_c6.data[49].x, temp_99);
    // 0x000428: 0x5080000000570904 Mufu
    temp_113 = inversesqrt(temp_110);
    // 0x000430: 0x49A0060C00970102 Ffma
    temp_114 = fma(temp_76, vp_c3.data[2].y, temp_101);
    // 0x000438: 0x5080000000570A0A Mufu
    temp_115 = inversesqrt(temp_111);
    // 0x000448: 0x49A000180C870300 Ffma
    temp_116 = fma(temp_98, vp_c6.data[50].x, temp_108);
    // 0x000450: 0x4C6810180BB70708 Fmul
    temp_117 = temp_109 * vp_c6.data[46].w;
    // 0x000458: 0x4C58101002070B07 Fadd
    temp_118 = temp_69 + vp_c4.data[8].x;
    // 0x000468: 0xEFF07F801107FF08 Ast
    out_attr9.x = temp_117;
    // 0x000470: 0x49A0030C00170106 Ffma
    temp_119 = fma(temp_76, vp_c3.data[0].y, temp_102);
    // 0x000478: 0x4C58300C03370116 Fadd
    temp_120 = 0.0 - vp_c3.data[12].w;
    temp_121 = temp_76 + temp_120;
    // 0x000488: 0x4C5830180B17010D Fadd
    temp_122 = 0.0 - vp_c6.data[44].y;
    temp_123 = temp_76 + temp_122;
    // 0x000490: 0xEFF07F800C47FF16 Ast
    out_attr4.y = temp_121;
    // 0x000498: 0x4C6810180BB7000C Fmul
    temp_124 = temp_116 * vp_c6.data[46].w;
    // 0x0004A8: 0x49A0028C00670701 Ffma
    temp_125 = fma(temp_118, vp_c3.data[1].z, temp_107);
    // 0x0004B0: 0xEFF07F801187FF0C Ast
    out_attr9.z = temp_124;
    // 0x0004B8: 0x49A0010C00A70700 Ffma
    temp_126 = fma(temp_118, vp_c3.data[2].z, temp_114);
    // 0x0004C8: 0x4C68101803870E0E Fmul
    temp_127 = temp_106 * vp_c6.data[14].x;
    // 0x0004D0: 0x49A0030C00270707 Ffma
    temp_128 = fma(temp_118, vp_c3.data[0].z, temp_119);
    // 0x0004D8: 0x49A0030C00270B06 Ffma
    temp_129 = fma(temp_69, vp_c3.data[0].z, temp_119);
    // 0x0004E8: 0x5C68100000A71414 Fmul
    temp_130 = temp_85 * temp_115;
    // 0x0004F0: 0x5C68100000A71515 Fmul
    temp_131 = temp_91 * temp_115;
    // 0x0004F8: 0xEFF07F800807FF14 Ast
    out_attr0.x = temp_130;
    // 0x000508: 0x49A0071803970D03 Ffma
    temp_132 = fma(temp_123, vp_c6.data[14].y, temp_127);
    // 0x000510: 0xEFF07F800847FF15 Ast
    out_attr0.y = temp_131;
    // 0x000518: 0x5C68100000A71313 Fmul
    temp_133 = temp_90 * temp_115;
    // 0x000528: 0x4C5830180B270B09 Fadd
    temp_134 = 0.0 - vp_c6.data[44].z;
    temp_135 = temp_69 + temp_134;
    // 0x000530: 0xEFF07F800887FF13 Ast
    out_attr0.z = temp_133;
    // 0x000538: 0x5C68100000471212 Fmul
    temp_136 = temp_74 * temp_113;
    // 0x000548: 0x49A0028C00670B05 Ffma
    temp_137 = fma(temp_69, vp_c3.data[1].z, temp_107);
    // 0x000550: 0xEFF07F800947FF12 Ast
    out_attr1.y = temp_136;
    // 0x000558: 0x5C6810000047110A Fmul
    temp_138 = temp_73 * temp_113;
    // 0x000568: 0x4C58100C00370606 Fadd
    temp_139 = temp_129 + vp_c3.data[0].w;
    // 0x000570: 0xEFF07F800987FF0A Ast
    out_attr1.z = temp_138;
    // 0x000578: 0x4C58300C03770B19 Fadd
    temp_140 = 0.0 - vp_c3.data[13].w;
    temp_141 = temp_69 + temp_140;
    // 0x000588: 0x49A0010C00A70B02 Ffma
    temp_142 = fma(temp_69, vp_c3.data[2].z, temp_114);
    // 0x000590: 0xEFF07F800C87FF19 Ast
    out_attr4.z = temp_141;
    // 0x000598: 0x5C68100001371208 Fmul
    temp_143 = temp_136 * temp_133;
    // 0x0005A8: 0x49A0019803A7090B Ffma
    temp_144 = fma(temp_135, vp_c6.data[14].z, temp_132);
    // 0x0005B0: 0x5C68100000470F04 Fmul
    temp_145 = temp_72 * temp_113;
    // 0x0005B8: 0x5C68100001470A09 Fmul
    temp_146 = temp_138 * temp_130;
    // 0x0005C8: 0xEFF07F800907FF04 Ast
    out_attr1.x = temp_145;
    // 0x0005D0: 0x4C58100C00770505 Fadd
    temp_147 = temp_137 + vp_c3.data[1].w;
    // 0x0005D8: 0x4C68101802C70606 Fmul
    temp_148 = temp_139 * vp_c6.data[11].x;
    // 0x0005E8: 0x4C58100C00370707 Fadd
    temp_149 = temp_128 + vp_c3.data[0].w;
    // 0x0005F0: 0x59A2040001570A08 Ffma
    temp_150 = 0.0 - temp_143;
    temp_151 = fma(temp_138, temp_131, temp_150);
    // 0x0005F8: 0x5C68100001570415 Fmul
    temp_152 = temp_145 * temp_131;
    // 0x000608: 0x59A2048001370409 Ffma
    temp_153 = 0.0 - temp_146;
    temp_154 = fma(temp_145, temp_133, temp_153);
    // 0x000610: 0x4C58100C00B70203 Fadd
    temp_155 = temp_142 + vp_c3.data[2].w;
    // 0x000618: 0x49A0031802D70505 Ffma
    temp_156 = fma(temp_147, vp_c6.data[11].y, temp_148);
    // 0x000628: 0xEFF07F800D87FF03 Ast
    out_attr5.z = temp_155;
    // 0x000630: 0x4C68100C02070702 Fmul
    temp_157 = temp_149 * vp_c3.data[8].x;
    // 0x000638: 0x4C68100C02870704 Fmul
    temp_158 = temp_149 * vp_c3.data[10].x;
    // 0x000648: 0x4C68100C02470706 Fmul
    temp_159 = temp_149 * vp_c3.data[9].x;
    // 0x000650: 0x4C58100C00770101 Fadd
    temp_160 = temp_125 + vp_c3.data[1].w;
    // 0x000658: 0x4C68100C01C70707 Fmul
    temp_161 = temp_149 * vp_c3.data[7].x;
    // 0x000668: 0x49A0029802E70305 Ffma
    temp_162 = fma(temp_155, vp_c6.data[11].z, temp_156);
    // 0x000670: 0x4C58100C00B70000 Fadd
    temp_163 = temp_126 + vp_c3.data[2].w;
    // 0x000678: 0x4C98079803C7000C Mov
    // 0x000688: 0x59A20A8001471215 Ffma
    temp_164 = 0.0 - temp_152;
    temp_165 = fma(temp_136, temp_130, temp_164);
    // 0x000690: 0x49A0010C02170102 Ffma
    temp_166 = fma(temp_160, vp_c3.data[8].y, temp_157);
    // 0x000698: 0x49A0020C02970103 Ffma
    temp_167 = fma(temp_160, vp_c3.data[10].y, temp_158);
    // 0x0006A8: 0x49A0030C02570106 Ffma
    temp_168 = fma(temp_160, vp_c3.data[9].y, temp_159);
    // 0x0006B0: 0x49A0038C01D70107 Ffma
    temp_169 = fma(temp_160, vp_c3.data[7].y, temp_161);
    // 0x0006B8: 0x4C9807980307000A Mov
    // 0x0006C8: 0x4C6810180BB71010 Fmul
    temp_170 = temp_112 * vp_c6.data[46].w;
    // 0x0006D0: 0x49A0010C02270002 Ffma
    temp_171 = fma(temp_163, vp_c3.data[8].z, temp_166);
    // 0x0006D8: 0xEFF07F801147FF10 Ast
    out_attr9.y = temp_170;
    // 0x0006E8: 0x49A0018C02A70003 Ffma
    temp_172 = fma(temp_163, vp_c3.data[10].z, temp_167);
    // 0x0006F0: 0x49A0030C02670006 Ffma
    temp_173 = fma(temp_163, vp_c3.data[9].z, temp_168);
    // 0x0006F8: 0x49A0038C01E70007 Ffma
    temp_174 = fma(temp_163, vp_c3.data[7].z, temp_169);
    // 0x000708: 0x51A0061803B70B0B Ffma
    temp_175 = fma(temp_144, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000710: 0x5C68100001770808 Fmul
    temp_176 = temp_151 * temp_66;
    // 0x000718: 0xEFF07F801047FF0B Ast
    out_attr8.y = temp_175;
    // 0x000728: 0x5C68100001770909 Fmul
    temp_177 = temp_154 * temp_66;
    // 0x000730: 0xEFF07F800A07FF08 Ast
    out_attr2.x = temp_176;
    // 0x000738: 0x5C68100001771515 Fmul
    temp_178 = temp_165 * temp_66;
    // 0x000748: 0xEFF07F800A47FF09 Ast
    out_attr2.y = temp_177;
    // 0x000750: 0x51A0051802F70505 Ffma
    temp_179 = fma(temp_162, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000758: 0xEFF07F800A87FF15 Ast
    out_attr2.z = temp_178;
    // 0x000768: 0x4C58100C02370202 Fadd
    temp_180 = temp_171 + vp_c3.data[8].w;
    // 0x000770: 0xEFF07F801007FF05 Ast
    out_attr8.x = temp_179;
    // 0x000778: 0x4C58100C02B70303 Fadd
    temp_181 = temp_172 + vp_c3.data[10].w;
    // 0x000788: 0xEFF07F800747FF02 Ast
    gl_Position.y = temp_180;
    // 0x000790: 0x4C58100C02770606 Fadd
    temp_182 = temp_173 + vp_c3.data[9].w;
    // 0x000798: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_181;
    // 0x0007A8: 0x4C58100C01F70707 Fadd
    temp_183 = temp_174 + vp_c3.data[7].w;
    // 0x0007B0: 0xEFF07F800787FF06 Ast
    gl_Position.z = temp_182;
    // 0x0007B8: 0xEFF07F800707FF07 Ast
    gl_Position.x = temp_183;
    // 0x0007C8: 0xE30000000007000F Exit
    return;
}
