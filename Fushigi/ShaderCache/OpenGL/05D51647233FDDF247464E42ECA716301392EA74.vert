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

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;


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
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
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
    int temp_55;
    uint temp_56;
    uint temp_57;
    int temp_58;
    precise float temp_59;
    int temp_60;
    uint temp_61;
    uint temp_62;
    int temp_63;
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
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400A7000A Mov
    // 0x000010: 0xEFD87F800807FF13 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A17 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079400B70001 Mov
    // 0x000030: 0xEFD87F801047FF10 Ald
    temp_3 = in_attr8.y;
    // 0x000038: 0x4C9807940027000B Mov
    // 0x000048: 0xEFD87F800847FF00 Ald
    temp_4 = in_attr0.y;
    // 0x000050: 0x4C98079400370002 Mov
    // 0x000058: 0xEFD87F800907FF18 Ald
    temp_5 = in_attr1.x;
    // 0x000068: 0x3848000000471717 Shl
    temp_6 = temp_2 << 4;
    // 0x000070: 0xEFD87F800A07FF05 Ald
    temp_7 = in_attr2.x;
    // 0x000078: 0x4C68101000071309 Fmul
    temp_8 = temp_0 * vp_c4.data[0].x;
    // 0x000088: 0xEFD87F800947FF12 Ald
    temp_9 = in_attr1.y;
    // 0x000090: 0x4C68101000471311 Fmul
    temp_10 = temp_0 * vp_c4.data[1].x;
    // 0x000098: 0xEFD87F800887FF0E Ald
    temp_11 = in_attr0.z;
    // 0x0000A8: 0x4C68101000871313 Fmul
    temp_12 = temp_0 * vp_c4.data[2].x;
    // 0x0000B0: 0xEFD87F800A47FF04 Ald
    temp_13 = in_attr2.y;
    // 0x0000B8: 0x51A0051400C7100A Ffma
    temp_14 = fma(temp_3, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x0000C8: 0xEFD87F801007FF15 Ald
    temp_15 = in_attr8.x;
    // 0x0000D0: 0x51A0009400D71014 Ffma
    temp_16 = fma(temp_3, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x0000D8: 0xEFD87F800987FF0C Ald
    temp_17 = in_attr1.z;
    // 0x0000E8: 0x51A005940047100B Ffma
    temp_18 = fma(temp_3, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0000F0: 0xEFD87F800A87FF07 Ald
    temp_19 = in_attr2.z;
    // 0x0000F8: 0x51A0011400571010 Ffma
    temp_20 = fma(temp_3, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000108: 0x49A0049000170009 Ffma
    temp_21 = fma(temp_4, vp_c4.data[0].y, temp_8);
    // 0x000110: 0x49A0089000570011 Ffma
    temp_22 = fma(temp_4, vp_c4.data[1].y, temp_10);
    // 0x000118: 0x49A0099000970013 Ffma
    temp_23 = fma(temp_4, vp_c4.data[2].y, temp_12);
    // 0x000128: 0xEF95007068071700 Ldc
    temp_24 = temp_6 + 0x680;
    temp_25 = uint(temp_24) >> 2;
    temp_26 = temp_25 >> 2;
    temp_27 = int(temp_25) & 3;
    temp_28 = vp_c7.data[int(temp_26)][temp_27];
    temp_29 = int(temp_25) + 1;
    temp_30 = uint(temp_29) >> 2;
    temp_31 = temp_29 & 3;
    temp_32 = vp_c7.data[int(temp_30)][temp_31];
    // 0x000130: 0xEF95007048071702 Ldc
    temp_33 = temp_6 + 0x480;
    temp_34 = uint(temp_33) >> 2;
    temp_35 = temp_34 >> 2;
    temp_36 = int(temp_34) & 3;
    temp_37 = vp_c7.data[int(temp_35)][temp_36];
    temp_38 = int(temp_34) + 1;
    temp_39 = uint(temp_38) >> 2;
    temp_40 = temp_38 & 3;
    temp_41 = vp_c7.data[int(temp_39)][temp_40];
    // 0x000138: 0x4C68101000071808 Fmul
    temp_42 = temp_5 * vp_c4.data[0].x;
    // 0x000148: 0x4C6810100047180F Fmul
    temp_43 = temp_5 * vp_c4.data[1].x;
    // 0x000150: 0x4C68101000871818 Fmul
    temp_44 = temp_5 * vp_c4.data[2].x;
    // 0x000158: 0x4C6810100007050D Fmul
    temp_45 = temp_7 * vp_c4.data[0].x;
    // 0x000168: 0x4C68101000470506 Fmul
    temp_46 = temp_7 * vp_c4.data[1].x;
    // 0x000170: 0x4C68101000870505 Fmul
    temp_47 = temp_7 * vp_c4.data[2].x;
    // 0x000178: 0x49A0041000171216 Ffma
    temp_48 = fma(temp_9, vp_c4.data[0].y, temp_42);
    // 0x000188: 0x49A007900057120F Ffma
    temp_49 = fma(temp_9, vp_c4.data[1].y, temp_43);
    // 0x000190: 0x49A00C1000971212 Ffma
    temp_50 = fma(temp_9, vp_c4.data[2].y, temp_44);
    // 0x000198: 0x49A0049000270E18 Ffma
    temp_51 = fma(temp_11, vp_c4.data[0].z, temp_21);
    // 0x0001A8: 0x49A006900017040D Ffma
    temp_52 = fma(temp_13, vp_c4.data[0].y, temp_45);
    // 0x0001B0: 0x49A0031000570408 Ffma
    temp_53 = fma(temp_13, vp_c4.data[1].y, temp_46);
    // 0x0001B8: 0x49A0029000970404 Ffma
    temp_54 = fma(temp_13, vp_c4.data[2].y, temp_47);
    // 0x0001C8: 0xEF94007068871705 Ldc
    temp_55 = temp_6 + 0x688;
    temp_56 = uint(temp_55) >> 2;
    temp_57 = temp_56 >> 2;
    temp_58 = int(temp_56) & 3;
    temp_59 = vp_c7.data[int(temp_57)][temp_58];
    // 0x0001D0: 0xEF94007048871706 Ldc
    temp_60 = temp_6 + 0x488;
    temp_61 = uint(temp_60) >> 2;
    temp_62 = temp_61 >> 2;
    temp_63 = int(temp_61) & 3;
    temp_64 = vp_c7.data[int(temp_62)][temp_63];
    // 0x0001D8: 0x49A00A1400971509 Ffma
    temp_65 = fma(temp_15, vp_c5.data[2].y, temp_16);
    // 0x0001E8: 0x49A0089000670E14 Ffma
    temp_66 = fma(temp_11, vp_c4.data[1].z, temp_22);
    // 0x0001F0: 0x4C58101000371811 Fadd
    temp_67 = temp_51 + vp_c4.data[0].w;
    // 0x0001F8: 0x49A00B1000270C16 Ffma
    temp_68 = fma(temp_17, vp_c4.data[0].z, temp_48);
    // 0x000208: 0x49A006900027070D Ffma
    temp_69 = fma(temp_19, vp_c4.data[0].z, temp_52);
    // 0x000210: 0x49A0099000A70E13 Ffma
    temp_70 = fma(temp_11, vp_c4.data[2].z, temp_23);
    // 0x000218: 0x49A0079000670C0F Ffma
    temp_71 = fma(temp_17, vp_c4.data[1].z, temp_49);
    // 0x000228: 0x49A0041000670708 Ffma
    temp_72 = fma(temp_19, vp_c4.data[1].z, temp_53);
    // 0x000230: 0x59A0000000271100 Ffma
    temp_73 = fma(temp_67, temp_37, temp_28);
    // 0x000238: 0x5C68100001671602 Fmul
    temp_74 = temp_68 * temp_68;
    // 0x000248: 0x5C68100000D70D0E Fmul
    temp_75 = temp_69 * temp_69;
    // 0x000250: 0x4C58101000771414 Fadd
    temp_76 = temp_66 + vp_c4.data[1].w;
    // 0x000258: 0x49A0021000A70704 Ffma
    temp_77 = fma(temp_19, vp_c4.data[2].z, temp_54);
    // 0x000268: 0x49A0091000A70C12 Ffma
    temp_78 = fma(temp_17, vp_c4.data[2].z, temp_50);
    // 0x000270: 0xEFD87F800AC7FF0C Ald
    temp_79 = in_attr2.w;
    // 0x000278: 0x4C58101000B71313 Fadd
    temp_80 = temp_70 + vp_c4.data[2].w;
    // 0x000288: 0xEFF07F800DC7FF09 Ast
    out_attr5.w = temp_65;
    // 0x000290: 0x59A0010000F70F07 Ffma
    temp_81 = fma(temp_71, temp_71, temp_74);
    // 0x000298: 0x59A007000087080E Ffma
    temp_82 = fma(temp_72, temp_72, temp_75);
    // 0x0002A8: 0x59A0008000371403 Ffma
    temp_83 = fma(temp_76, temp_41, temp_32);
    // 0x0002B0: 0x4C68100C00870001 Fmul
    temp_84 = temp_73 * vp_c3.data[2].x;
    // 0x0002B8: 0x49A005140087150A Ffma
    temp_85 = fma(temp_15, vp_c5.data[2].x, temp_14);
    // 0x0002C8: 0x59A0028000671306 Ffma
    temp_86 = fma(temp_80, temp_64, temp_59);
    // 0x0002D0: 0xEFF07F800D87FF0A Ast
    out_attr5.z = temp_85;
    // 0x0002D8: 0x59A0038001271207 Ffma
    temp_87 = fma(temp_78, temp_78, temp_81);
    // 0x0002E8: 0x59A007000047040E Ffma
    temp_88 = fma(temp_77, temp_77, temp_82);
    // 0x0002F0: 0x5080000000570709 Mufu
    temp_89 = inversesqrt(temp_87);
    // 0x0002F8: 0x49A0008C00970301 Ffma
    temp_90 = fma(temp_83, vp_c3.data[2].y, temp_84);
    // 0x000308: 0x5080000000570E0E Mufu
    temp_91 = inversesqrt(temp_88);
    // 0x000310: 0x49A005940007150B Ffma
    temp_92 = fma(temp_15, vp_c5.data[0].x, temp_18);
    // 0x000318: 0x4C68100C00070002 Fmul
    temp_93 = temp_73 * vp_c3.data[0].x;
    // 0x000328: 0xEFF07F800D07FF0B Ast
    out_attr5.x = temp_92;
    // 0x000330: 0x4C68100C00470005 Fmul
    temp_94 = temp_73 * vp_c3.data[1].x;
    // 0x000338: 0x4C58300C02F70011 Fadd
    temp_95 = 0.0 - vp_c3.data[11].w;
    temp_96 = temp_73 + temp_95;
    // 0x000348: 0x49A0008C00A7060A Ffma
    temp_97 = fma(temp_86, vp_c3.data[2].z, temp_90);
    // 0x000350: 0xEFF07F800B07FF11 Ast
    out_attr3.x = temp_96;
    // 0x000358: 0x49A0010C00170300 Ffma
    temp_98 = fma(temp_83, vp_c3.data[0].y, temp_93);
    // 0x000368: 0x4C58300C0377060B Fadd
    temp_99 = 0.0 - vp_c3.data[13].w;
    temp_100 = temp_86 + temp_99;
    // 0x000370: 0x4C58101002070606 Fadd
    temp_101 = temp_86 + vp_c4.data[8].x;
    // 0x000378: 0xEFF07F800B87FF0B Ast
    out_attr3.z = temp_100;
    // 0x000388: 0x4C58300C03370313 Fadd
    temp_102 = 0.0 - vp_c3.data[12].w;
    temp_103 = temp_83 + temp_102;
    // 0x000390: 0x49A0028C00570305 Ffma
    temp_104 = fma(temp_83, vp_c3.data[1].y, temp_94);
    // 0x000398: 0xEFF07F800B47FF13 Ast
    out_attr3.y = temp_103;
    // 0x0003A8: 0x5C68100000971212 Fmul
    temp_105 = temp_78 * temp_89;
    // 0x0003B0: 0x5C68100000E70808 Fmul
    temp_106 = temp_72 * temp_91;
    // 0x0003B8: 0xEFF07F800887FF12 Ast
    out_attr0.z = temp_105;
    // 0x0003C8: 0x5C68100000E70403 Fmul
    temp_107 = temp_77 * temp_91;
    // 0x0003D0: 0xEFF07F800947FF08 Ast
    out_attr1.y = temp_106;
    // 0x0003D8: 0x5C68100000971616 Fmul
    temp_108 = temp_68 * temp_89;
    // 0x0003E8: 0xEFF07F800987FF03 Ast
    out_attr1.z = temp_107;
    // 0x0003F0: 0x49A0000C00270600 Ffma
    temp_109 = fma(temp_101, vp_c3.data[0].z, temp_98);
    // 0x0003F8: 0xEFF07F800807FF16 Ast
    out_attr0.x = temp_108;
    // 0x000408: 0x5C68100000970F09 Fmul
    temp_110 = temp_71 * temp_89;
    // 0x000410: 0x5C68100000871202 Fmul
    temp_111 = temp_105 * temp_106;
    // 0x000418: 0xEFF07F800847FF09 Ast
    out_attr0.y = temp_110;
    // 0x000428: 0x5C68100000E70D04 Fmul
    temp_112 = temp_69 * temp_91;
    // 0x000430: 0x5C68100000371607 Fmul
    temp_113 = temp_108 * temp_107;
    // 0x000438: 0xEFF07F800907FF04 Ast
    out_attr1.x = temp_112;
    // 0x000448: 0x4C58100C00370000 Fadd
    temp_114 = temp_109 + vp_c3.data[0].w;
    // 0x000450: 0x49A0028C00670605 Ffma
    temp_115 = fma(temp_101, vp_c3.data[1].z, temp_104);
    // 0x000458: 0x49A0008C00A70601 Ffma
    temp_116 = fma(temp_101, vp_c3.data[2].z, temp_90);
    // 0x000468: 0x59A2010000370906 Ffma
    temp_117 = 0.0 - temp_111;
    temp_118 = fma(temp_110, temp_107, temp_117);
    // 0x000470: 0x5C6810000047090B Fmul
    temp_119 = temp_110 * temp_112;
    // 0x000478: 0x59A2038000471207 Ffma
    temp_120 = 0.0 - temp_113;
    temp_121 = fma(temp_105, temp_112, temp_120);
    // 0x000488: 0x4C68100C02870002 Fmul
    temp_122 = temp_114 * vp_c3.data[10].x;
    // 0x000490: 0x4C68100C02470003 Fmul
    temp_123 = temp_114 * vp_c3.data[9].x;
    // 0x000498: 0x4C68100C02070004 Fmul
    temp_124 = temp_114 * vp_c3.data[8].x;
    // 0x0004A8: 0x4C58100C00770505 Fadd
    temp_125 = temp_115 + vp_c3.data[1].w;
    // 0x0004B0: 0x4C68100C01C70000 Fmul
    temp_126 = temp_114 * vp_c3.data[7].x;
    // 0x0004B8: 0x4C58100C00B70101 Fadd
    temp_127 = temp_116 + vp_c3.data[2].w;
    // 0x0004C8: 0x59A205800087160B Ffma
    temp_128 = 0.0 - temp_119;
    temp_129 = fma(temp_108, temp_106, temp_128);
    // 0x0004D0: 0x49A0081400171510 Ffma
    temp_130 = fma(temp_15, vp_c5.data[0].y, temp_20);
    // 0x0004D8: 0x4C58100C00B70A0A Fadd
    temp_131 = temp_97 + vp_c3.data[2].w;
    // 0x0004E8: 0xEFF07F800D47FF10 Ast
    out_attr5.y = temp_130;
    // 0x0004F0: 0x49A0010C02970502 Ffma
    temp_132 = fma(temp_125, vp_c3.data[10].y, temp_122);
    // 0x0004F8: 0xEFF07F800C87FF0A Ast
    out_attr4.z = temp_131;
    // 0x000508: 0x49A0018C02570503 Ffma
    temp_133 = fma(temp_125, vp_c3.data[9].y, temp_123);
    // 0x000510: 0x49A0020C02170504 Ffma
    temp_134 = fma(temp_125, vp_c3.data[8].y, temp_124);
    // 0x000518: 0x49A0000C01D70500 Ffma
    temp_135 = fma(temp_125, vp_c3.data[7].y, temp_126);
    // 0x000528: 0x5C68100000C70606 Fmul
    temp_136 = temp_118 * temp_79;
    // 0x000530: 0x5C68100000C70707 Fmul
    temp_137 = temp_121 * temp_79;
    // 0x000538: 0xEFF07F800A07FF06 Ast
    out_attr2.x = temp_136;
    // 0x000548: 0x49A0010C02A70102 Ffma
    temp_138 = fma(temp_127, vp_c3.data[10].z, temp_132);
    // 0x000550: 0xEFF07F800A47FF07 Ast
    out_attr2.y = temp_137;
    // 0x000558: 0x49A0018C02670103 Ffma
    temp_139 = fma(temp_127, vp_c3.data[9].z, temp_133);
    // 0x000568: 0x49A0020C02270104 Ffma
    temp_140 = fma(temp_127, vp_c3.data[8].z, temp_134);
    // 0x000570: 0x49A0000C01E70100 Ffma
    temp_141 = fma(temp_127, vp_c3.data[7].z, temp_135);
    // 0x000578: 0x5C68100000C70B0B Fmul
    temp_142 = temp_129 * temp_79;
    // 0x000588: 0x4C58100C02B70202 Fadd
    temp_143 = temp_138 + vp_c3.data[10].w;
    // 0x000590: 0xEFF07F800A87FF0B Ast
    out_attr2.z = temp_142;
    // 0x000598: 0x4C58100C02770303 Fadd
    temp_144 = temp_139 + vp_c3.data[9].w;
    // 0x0005A8: 0xEFF07F8007C7FF02 Ast
    gl_Position.w = temp_143;
    // 0x0005B0: 0x4C58100C02370404 Fadd
    temp_145 = temp_140 + vp_c3.data[8].w;
    // 0x0005B8: 0xEFF07F800787FF03 Ast
    gl_Position.z = temp_144;
    // 0x0005C8: 0x4C58100C01F70000 Fadd
    temp_146 = temp_141 + vp_c3.data[7].w;
    // 0x0005D0: 0xEFF07F800747FF04 Ast
    gl_Position.y = temp_145;
    // 0x0005D8: 0xEFF07F800707FF00 Ast
    gl_Position.x = temp_146;
    // 0x0005E8: 0xE30000000007000F Exit
    return;
}
