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
layout (location = 8) in vec4 in_attr8;
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 7) out vec4 out_attr7;


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
    int temp_10;
    uint temp_11;
    uint temp_12;
    int temp_13;
    precise float temp_14;
    int temp_15;
    uint temp_16;
    uint temp_17;
    int temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    int temp_24;
    uint temp_25;
    uint temp_26;
    int temp_27;
    precise float temp_28;
    int temp_29;
    uint temp_30;
    int temp_31;
    precise float temp_32;
    int temp_33;
    uint temp_34;
    uint temp_35;
    int temp_36;
    precise float temp_37;
    int temp_38;
    uint temp_39;
    int temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
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
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400A7000D Mov
    // 0x000010: 0xEFD87F800807FF12 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079400B70007 Mov
    // 0x000030: 0xEFD87F800847FF17 Ald
    temp_3 = in_attr0.y;
    // 0x000038: 0x4C98079400270013 Mov
    // 0x000048: 0xEFD87F801047FF06 Ald
    temp_4 = in_attr8.y;
    // 0x000050: 0x4C98079400370015 Mov
    // 0x000058: 0xEFD87F800907FF0F Ald
    temp_5 = in_attr1.x;
    // 0x000068: 0x3848000000470010 Shl
    temp_6 = temp_2 << 4;
    // 0x000070: 0xEFD87F800887FF0E Ald
    temp_7 = in_attr0.z;
    // 0x000078: 0x4C68101000871205 Fmul
    temp_8 = temp_0 * vp_c4.data[2].x;
    // 0x000088: 0xEFD87F800947FF0B Ald
    temp_9 = in_attr1.y;
    // 0x000090: 0xEF94007048871009 Ldc
    temp_10 = temp_6 + 0x488;
    temp_11 = uint(temp_10) >> 2;
    temp_12 = temp_11 >> 2;
    temp_13 = int(temp_11) & 3;
    temp_14 = vp_c7.data[int(temp_12)][temp_13];
    // 0x000098: 0xEF94007068871008 Ldc
    temp_15 = temp_6 + 0x688;
    temp_16 = uint(temp_15) >> 2;
    temp_17 = temp_16 >> 2;
    temp_18 = int(temp_16) & 3;
    temp_19 = vp_c7.data[int(temp_17)][temp_18];
    // 0x0000A8: 0x4C68101000071211 Fmul
    temp_20 = temp_0 * vp_c4.data[0].x;
    // 0x0000B0: 0xEFD87F800987FF0A Ald
    temp_21 = in_attr1.z;
    // 0x0000B8: 0x4C68101000471212 Fmul
    temp_22 = temp_0 * vp_c4.data[1].x;
    // 0x0000C8: 0xEFD87F801007FF04 Ald
    temp_23 = in_attr8.x;
    // 0x0000D0: 0xEF95007048071000 Ldc
    temp_24 = temp_6 + 0x480;
    temp_25 = uint(temp_24) >> 2;
    temp_26 = temp_25 >> 2;
    temp_27 = int(temp_25) & 3;
    temp_28 = vp_c7.data[int(temp_26)][temp_27];
    temp_29 = int(temp_25) + 1;
    temp_30 = uint(temp_29) >> 2;
    temp_31 = temp_29 & 3;
    temp_32 = vp_c7.data[int(temp_30)][temp_31];
    // 0x0000D8: 0xEF95007068071002 Ldc
    temp_33 = temp_6 + 0x680;
    temp_34 = uint(temp_33) >> 2;
    temp_35 = temp_34 >> 2;
    temp_36 = int(temp_34) & 3;
    temp_37 = vp_c7.data[int(temp_35)][temp_36];
    temp_38 = int(temp_34) + 1;
    temp_39 = uint(temp_38) >> 2;
    temp_40 = temp_38 & 3;
    temp_41 = vp_c7.data[int(temp_39)][temp_40];
    // 0x0000E8: 0x49A0029000971714 Ffma
    temp_42 = fma(temp_3, vp_c4.data[2].y, temp_8);
    // 0x0000F0: 0xEFD87F8014C7FF0C Ald
    temp_43 = in_attr12.w;
    // 0x0000F8: 0x51A0069400C7060D Ffma
    temp_44 = fma(temp_4, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x000108: 0x51A0039400D70607 Ffma
    temp_45 = fma(temp_4, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x000110: 0x51A0099400470605 Ffma
    temp_46 = fma(temp_4, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000118: 0x51A00A9400570606 Ffma
    temp_47 = fma(temp_4, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000128: 0x4C68101000070F15 Fmul
    temp_48 = temp_5 * vp_c4.data[0].x;
    // 0x000130: 0x49A0091000571713 Ffma
    temp_49 = fma(temp_3, vp_c4.data[1].y, temp_22);
    // 0x000138: 0x49A0089000171711 Ffma
    temp_50 = fma(temp_3, vp_c4.data[0].y, temp_20);
    // 0x000148: 0x49A00A1000A70E14 Ffma
    temp_51 = fma(temp_7, vp_c4.data[2].z, temp_42);
    // 0x000150: 0x4C68101000870F12 Fmul
    temp_52 = temp_5 * vp_c4.data[2].x;
    // 0x000158: 0x4C68101000470F16 Fmul
    temp_53 = temp_5 * vp_c4.data[1].x;
    // 0x000168: 0x49A00A9000170B15 Ffma
    temp_54 = fma(temp_9, vp_c4.data[0].y, temp_48);
    // 0x000170: 0x49A0099000670E13 Ffma
    temp_55 = fma(temp_7, vp_c4.data[1].z, temp_49);
    // 0x000178: 0x49A0089000270E11 Ffma
    temp_56 = fma(temp_7, vp_c4.data[0].z, temp_50);
    // 0x000188: 0x4C58101000B7140F Fadd
    temp_57 = temp_51 + vp_c4.data[2].w;
    // 0x000190: 0x49A0091000970B10 Ffma
    temp_58 = fma(temp_9, vp_c4.data[2].y, temp_52);
    // 0x000198: 0xEFF07F8009C7FF0C Ast
    out_attr1.w = temp_43;
    // 0x0001A8: 0x49A00B1000570B14 Ffma
    temp_59 = fma(temp_9, vp_c4.data[1].y, temp_53);
    // 0x0001B0: 0x49A00A9000270A0B Ffma
    temp_60 = fma(temp_21, vp_c4.data[0].z, temp_54);
    // 0x0001B8: 0x4C5810100077130E Fadd
    temp_61 = temp_55 + vp_c4.data[1].w;
    // 0x0001C8: 0x4C58101000371111 Fadd
    temp_62 = temp_56 + vp_c4.data[0].w;
    // 0x0001D0: 0x59A0040000970F08 Ffma
    temp_63 = fma(temp_57, temp_14, temp_19);
    // 0x0001D8: 0x49A0081000A70A09 Ffma
    temp_64 = fma(temp_21, vp_c4.data[2].z, temp_58);
    // 0x0001E8: 0x49A003940097040F Ffma
    temp_65 = fma(temp_23, vp_c5.data[2].y, temp_45);
    // 0x0001F0: 0x49A00A1000670A0A Ffma
    temp_66 = fma(temp_21, vp_c4.data[1].z, temp_59);
    // 0x0001F8: 0xEFF07F800CC7FF0F Ast
    out_attr4.w = temp_65;
    // 0x000208: 0x5C68100000B70B07 Fmul
    temp_67 = temp_60 * temp_60;
    // 0x000210: 0x59A0018000170E01 Ffma
    temp_68 = fma(temp_61, temp_32, temp_41);
    // 0x000218: 0x59A0010000071111 Ffma
    temp_69 = fma(temp_62, temp_28, temp_37);
    // 0x000228: 0x49A006940087040E Ffma
    temp_70 = fma(temp_23, vp_c5.data[2].x, temp_44);
    // 0x000230: 0x4C5810180BA7080D Fadd
    temp_71 = temp_63 + vp_c6.data[46].z;
    // 0x000238: 0xEFF07F800C87FF0E Ast
    out_attr4.z = temp_70;
    // 0x000248: 0x59A0038000A70A0C Ffma
    temp_72 = fma(temp_66, temp_66, temp_67);
    // 0x000250: 0x4C68100C00071107 Fmul
    temp_73 = temp_69 * vp_c3.data[0].x;
    // 0x000258: 0x49A0031400170415 Ffma
    temp_74 = fma(temp_23, vp_c5.data[0].y, temp_47);
    // 0x000268: 0x4C5810180B970103 Fadd
    temp_75 = temp_68 + vp_c6.data[46].y;
    // 0x000270: 0xEFF07F800C47FF15 Ast
    out_attr4.y = temp_74;
    // 0x000278: 0x4C6810180C670D02 Fmul
    temp_76 = temp_71 * vp_c6.data[49].z;
    // 0x000288: 0xEFF07F800D47FF15 Ast
    out_attr5.y = temp_74;
    // 0x000290: 0x4C6810180C270D00 Fmul
    temp_77 = temp_71 * vp_c6.data[48].z;
    // 0x000298: 0x4C68100C0047110E Fmul
    temp_78 = temp_69 * vp_c3.data[1].x;
    // 0x0002A8: 0x4C6810180CA70D0D Fmul
    temp_79 = temp_71 * vp_c6.data[50].z;
    // 0x0002B0: 0x4C68100C00871106 Fmul
    temp_80 = temp_69 * vp_c3.data[2].x;
    // 0x0002B8: 0x4C5830180B071110 Fadd
    temp_81 = 0.0 - vp_c6.data[44].x;
    temp_82 = temp_69 + temp_81;
    // 0x0002C8: 0x49A0029400070413 Ffma
    temp_83 = fma(temp_23, vp_c5.data[0].x, temp_46);
    // 0x0002D0: 0x49A0038C00170107 Ffma
    temp_84 = fma(temp_68, vp_c3.data[0].y, temp_73);
    // 0x0002D8: 0xEFF07F800C07FF13 Ast
    out_attr4.x = temp_83;
    // 0x0002E8: 0x59A006000097090C Ffma
    temp_85 = fma(temp_64, temp_64, temp_72);
    // 0x0002F0: 0xEFF07F800D07FF13 Ast
    out_attr5.x = temp_83;
    // 0x0002F8: 0x4C58101002070805 Fadd
    temp_86 = temp_63 + vp_c4.data[8].x;
    // 0x000308: 0x5080000000570C0C Mufu
    temp_87 = inversesqrt(temp_85);
    // 0x000310: 0x49A0070C0057010E Ffma
    temp_88 = fma(temp_68, vp_c3.data[1].y, temp_78);
    // 0x000318: 0x49A001180C570302 Ffma
    temp_89 = fma(temp_75, vp_c6.data[49].y, temp_76);
    // 0x000328: 0x49A000180C170300 Ffma
    temp_90 = fma(temp_75, vp_c6.data[48].y, temp_77);
    // 0x000330: 0x49A006980C970304 Ffma
    temp_91 = fma(temp_75, vp_c6.data[50].y, temp_79);
    // 0x000338: 0x49A0030C00970106 Ffma
    temp_92 = fma(temp_68, vp_c3.data[2].y, temp_80);
    // 0x000348: 0x4C5810180B871103 Fadd
    temp_93 = temp_69 + vp_c6.data[46].x;
    // 0x000350: 0x4C58300C02F71112 Fadd
    temp_94 = 0.0 - vp_c3.data[11].w;
    temp_95 = temp_69 + temp_94;
    // 0x000358: 0x4C5830180B170111 Fadd
    temp_96 = 0.0 - vp_c6.data[44].y;
    temp_97 = temp_68 + temp_96;
    // 0x000368: 0xEFF07F800A07FF12 Ast
    out_attr2.x = temp_95;
    // 0x000370: 0x4C68101803871010 Fmul
    temp_98 = temp_82 * vp_c6.data[14].x;
    // 0x000378: 0x49A0038C0027080D Ffma
    temp_99 = fma(temp_63, vp_c3.data[0].z, temp_84);
    // 0x000388: 0x4C58300C03370113 Fadd
    temp_100 = 0.0 - vp_c3.data[12].w;
    temp_101 = temp_68 + temp_100;
    // 0x000390: 0x49A0038C00270507 Ffma
    temp_102 = fma(temp_86, vp_c3.data[0].z, temp_84);
    // 0x000398: 0xEFF07F800A47FF13 Ast
    out_attr2.y = temp_101;
    // 0x0003A8: 0x49A0070C00670501 Ffma
    temp_103 = fma(temp_86, vp_c3.data[1].z, temp_88);
    // 0x0003B0: 0x49A0030C00A70505 Ffma
    temp_104 = fma(temp_86, vp_c3.data[2].z, temp_92);
    // 0x0003B8: 0x4C58300C03770814 Fadd
    temp_105 = 0.0 - vp_c3.data[13].w;
    temp_106 = temp_63 + temp_105;
    // 0x0003C8: 0x49A0070C0067080F Ffma
    temp_107 = fma(temp_63, vp_c3.data[1].z, temp_88);
    // 0x0003D0: 0xEFF07F800A87FF14 Ast
    out_attr2.z = temp_106;
    // 0x0003D8: 0x49A0030C00A70806 Ffma
    temp_108 = fma(temp_63, vp_c3.data[2].z, temp_92);
    // 0x0003E8: 0x49A0081803971111 Ffma
    temp_109 = fma(temp_97, vp_c6.data[14].y, temp_98);
    // 0x0003F0: 0x4C5830180B270808 Fadd
    temp_110 = 0.0 - vp_c6.data[44].z;
    temp_111 = temp_63 + temp_110;
    // 0x0003F8: 0x49A001180C470302 Ffma
    temp_112 = fma(temp_93, vp_c6.data[49].x, temp_89);
    // 0x000408: 0x49A002180C870304 Ffma
    temp_113 = fma(temp_93, vp_c6.data[50].x, temp_91);
    // 0x000410: 0x49A000180C070303 Ffma
    temp_114 = fma(temp_93, vp_c6.data[48].x, temp_90);
    // 0x000418: 0x4C58100C00370D0D Fadd
    temp_115 = temp_99 + vp_c3.data[0].w;
    // 0x000428: 0x4C58100C00370707 Fadd
    temp_116 = temp_102 + vp_c3.data[0].w;
    // 0x000430: 0x5C68100000C70B0B Fmul
    temp_117 = temp_60 * temp_87;
    // 0x000438: 0x5C68100000C70A0A Fmul
    temp_118 = temp_66 * temp_87;
    // 0x000448: 0xEFF07F800807FF0B Ast
    out_attr0.x = temp_117;
    // 0x000450: 0x5C68100000C7090C Fmul
    temp_119 = temp_64 * temp_87;
    // 0x000458: 0xEFF07F800847FF0A Ast
    out_attr0.y = temp_118;
    // 0x000468: 0x49A0089803A70811 Ffma
    temp_120 = fma(temp_111, vp_c6.data[14].z, temp_109);
    // 0x000470: 0xEFF07F800887FF0C Ast
    out_attr0.z = temp_119;
    // 0x000478: 0x4C6810180BB70209 Fmul
    temp_121 = temp_112 * vp_c6.data[46].w;
    // 0x000488: 0x4C6810180BB70308 Fmul
    temp_122 = temp_114 * vp_c6.data[46].w;
    // 0x000490: 0xEFF07F800F47FF09 Ast
    out_attr7.y = temp_121;
    // 0x000498: 0x4C58100C00770F0F Fadd
    temp_123 = temp_107 + vp_c3.data[1].w;
    // 0x0004A8: 0xEFF07F800F07FF08 Ast
    out_attr7.x = temp_122;
    // 0x0004B0: 0x4C68101802C70D0D Fmul
    temp_124 = temp_115 * vp_c6.data[11].x;
    // 0x0004B8: 0x4C68100C02470700 Fmul
    temp_125 = temp_116 * vp_c3.data[9].x;
    // 0x0004C8: 0x4C68100C01C70702 Fmul
    temp_126 = temp_116 * vp_c3.data[7].x;
    // 0x0004D0: 0x4C68100C02870703 Fmul
    temp_127 = temp_116 * vp_c3.data[10].x;
    // 0x0004D8: 0x4C58100C00770101 Fadd
    temp_128 = temp_103 + vp_c3.data[1].w;
    // 0x0004E8: 0x4C68100C02070707 Fmul
    temp_129 = temp_116 * vp_c3.data[8].x;
    // 0x0004F0: 0x49A0069802D70F0D Ffma
    temp_130 = fma(temp_123, vp_c6.data[11].y, temp_124);
    // 0x0004F8: 0x4C58100C00B70606 Fadd
    temp_131 = temp_108 + vp_c3.data[2].w;
    // 0x000508: 0x4C58100C00B70505 Fadd
    temp_132 = temp_104 + vp_c3.data[2].w;
    // 0x000510: 0xEFF07F800B87FF06 Ast
    out_attr3.z = temp_131;
    // 0x000518: 0x49A0000C02570100 Ffma
    temp_133 = fma(temp_128, vp_c3.data[9].y, temp_125);
    // 0x000528: 0x49A0010C01D70102 Ffma
    temp_134 = fma(temp_128, vp_c3.data[7].y, temp_126);
    // 0x000530: 0x49A0018C02970103 Ffma
    temp_135 = fma(temp_128, vp_c3.data[10].y, temp_127);
    // 0x000538: 0x49A0038C02170107 Ffma
    temp_136 = fma(temp_128, vp_c3.data[8].y, temp_129);
    // 0x000548: 0x49A0069802E7060D Ffma
    temp_137 = fma(temp_131, vp_c6.data[11].z, temp_130);
    // 0x000550: 0x4C98079803C7000A Mov
    // 0x000558: 0x49A0000C02670500 Ffma
    temp_138 = fma(temp_132, vp_c3.data[9].z, temp_133);
    // 0x000568: 0x4C98079803070006 Mov
    // 0x000570: 0x49A0010C01E70502 Ffma
    temp_139 = fma(temp_132, vp_c3.data[7].z, temp_134);
    // 0x000578: 0x49A0018C02A70503 Ffma
    temp_140 = fma(temp_132, vp_c3.data[10].z, temp_135);
    // 0x000588: 0x49A0038C02270507 Ffma
    temp_141 = fma(temp_132, vp_c3.data[8].z, temp_136);
    // 0x000590: 0x4C6810180BB70404 Fmul
    temp_142 = temp_113 * vp_c6.data[46].w;
    // 0x000598: 0x51A0051803B71111 Ffma
    temp_143 = fma(temp_120, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x0005A8: 0xEFF07F800F87FF04 Ast
    out_attr7.z = temp_142;
    // 0x0005B0: 0x51A0031802F70D0D Ffma
    temp_144 = fma(temp_137, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x0005B8: 0xEFF07F800E47FF11 Ast
    out_attr6.y = temp_143;
    // 0x0005C8: 0x4C58100C02770000 Fadd
    temp_145 = temp_138 + vp_c3.data[9].w;
    // 0x0005D0: 0xEFF07F800E07FF0D Ast
    out_attr6.x = temp_144;
    // 0x0005D8: 0x4C58100C01F70202 Fadd
    temp_146 = temp_139 + vp_c3.data[7].w;
    // 0x0005E8: 0xEFF07F800787FF00 Ast
    gl_Position.z = temp_145;
    // 0x0005F0: 0x4C58100C02B70303 Fadd
    temp_147 = temp_140 + vp_c3.data[10].w;
    // 0x0005F8: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_146;
    // 0x000608: 0x4C58100C02370707 Fadd
    temp_148 = temp_141 + vp_c3.data[8].w;
    // 0x000610: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_147;
    // 0x000618: 0xEFF07F800747FF07 Ast
    gl_Position.y = temp_148;
    // 0x000628: 0xE30000000007000F Exit
    return;
}
